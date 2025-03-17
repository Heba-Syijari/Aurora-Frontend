FROM node:18.18.2-alpine

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat

WORKDIR /app/

RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs


COPY --chown=nextjs:nextjs ./package.json ./
COPY --chown=nextjs:nextjs ./node_modules/ ./node_modules/
COPY --chown=nextjs:nextjs ./.next/ ./.next/
COPY --chown=nextjs:nextjs ./public ./public/


USER nextjs
WORKDIR /app/

EXPOSE 8084

ENV PORT 8084

# CMD ["yarn", "start:prod"]
CMD ["npm", "run", "start"]
