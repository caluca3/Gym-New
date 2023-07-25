import rescue from "express-rescue";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

const baseUrl = "/api/auth/";

export default rescue(async (req, res, next) => {
  if (!req.url.startsWith(baseUrl)) {
    return next();
  }

  req.query.nextauth = req.url // start with request url
    .slice(baseUrl.length) // make relative to baseUrl
    .replace(/\?.*/, "") // remove query part, use only path part
    .split("/"); // as array of strings

  NextAuth(req, res, options);
});

const options: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_JWT_SECRET,
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
  },
};
