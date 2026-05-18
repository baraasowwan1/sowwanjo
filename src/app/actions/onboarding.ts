"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function createAccountAndSite(formData: any) {
  try {
    // 1. Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email: formData.email }
    });

    if (existingUser) {
      return { success: false, error: "Email already exists" };
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    // 3. Check if slug exists
    const existingSite = await prisma.tenantSite.findUnique({
      where: { slug: formData.tenantSlug }
    });

    if (existingSite) {
      return { success: false, error: "Website URL is already taken" };
    }

    // 4. Calculate expiration date based on plan
    const expiresAt = new Date();
    if (formData.plan === 'ANNUAL') {
      expiresAt.setFullYear(expiresAt.getFullYear() + 1);
    } else {
      expiresAt.setMonth(expiresAt.getMonth() + 1);
    }

    // 5. Create everything in a transaction
    await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          email: formData.email,
          password: hashedPassword,
          role: "CLIENT",
        }
      });

      // Create subscription
      await tx.subscription.create({
        data: {
          userId: user.id,
          plan: formData.plan,
          status: "ACTIVE",
          paypalId: formData.paypalSubscriptionId || null,
          endDate: expiresAt
        }
      });

      // Create tenant site
      await tx.tenantSite.create({
        data: {
          userId: user.id,
          slug: formData.tenantSlug,
          siteName: formData.siteName,
          themeColor: formData.themeColor,
          font: formData.font,
          status: "ACTIVE",
          expiresAt: expiresAt
        }
      });
    });

    return { success: true };
  } catch (error: any) {
    console.error("Onboarding failed:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
}
