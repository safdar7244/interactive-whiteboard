import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { title } from "process";

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxWsjGM6Ob90Sd4f1iyuU_ZnK7_soL906VA&s",
    });
    return board;
  },
});

export const deleteBoard = mutation({
  args: {
    id: v.id("boards"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    try {
      await ctx.db.delete(args.id);
      return true;
    } catch (error) {
      throw new Error("Failed to delete board");
    }
  },
});

export const updateBoard = mutation({
  args: {
    id: v.id("boards"),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    const title = args.title.trim();

    if (!title) {
      throw new Error("Title is required");
    }

    if (title.length > 60) {
      throw new Error("Title must be less than 60 characters");
    }

    try {
      const board = await ctx.db.patch(args.id, {
        title: args.title,
      });
      return board;
    } catch (error) {
      throw new Error("Failed to update board");
    }
  },
});
