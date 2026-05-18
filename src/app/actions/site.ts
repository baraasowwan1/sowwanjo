"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveSiteConfig(formData: {
  tenantSlug: string;
  name: string;
  headline: string;
  themeColor: string;
  font: string;
}) {
  try {
    // Upsert the tenant site. If it doesn't exist, create it.
    // We assume the user is managing 'my-demo-site' for now as a mock user ID.
    const site = await prisma.tenantSite.upsert({
      where: { slug: formData.tenantSlug },
      update: {
        siteName: formData.name,
        headline: formData.headline,
        themeColor: formData.themeColor,
        font: formData.font,
      },
      create: {
        slug: formData.tenantSlug,
        siteName: formData.name,
        headline: formData.headline,
        themeColor: formData.themeColor,
        font: formData.font,
        userId: 'admin-user', // Mock user ID since auth isn't fully set up
      }
    });

    // We must revalidate the path so the live site updates immediately
    revalidatePath(`/sites/${formData.tenantSlug}`);

    return { success: true };
  } catch (error) {
    console.error("Failed to save site config:", error);
    return { success: false, error: "Failed to save configuration." };
  }
}

export async function getSiteConfig(slug: string) {
  try {
    const site = await prisma.tenantSite.findUnique({
      where: { slug },
      include: {
        products: true,
        reservations: true,
      }
    });
    return site;
  } catch (error) {
    console.error("Failed to fetch site config:", error);
    return null;
  }
}
