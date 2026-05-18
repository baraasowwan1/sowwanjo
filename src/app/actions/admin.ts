"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAdminData() {
  try {
    const sites = await prisma.tenantSite.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return sites;
  } catch (error) {
    console.error("Failed to fetch admin data", error);
    return [];
  }
}

export async function toggleSiteStatus(siteId: string, currentStatus: string) {
  try {
    const newStatus = currentStatus === "ACTIVE" ? "SUSPENDED" : "ACTIVE";
    
    await prisma.tenantSite.update({
      where: { id: siteId },
      data: { status: newStatus }
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Failed to update status", error);
    return { success: false };
  }
}
