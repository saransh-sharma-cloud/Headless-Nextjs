if (!URL.canParse(process.env.NEXT_PUBLIC_WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables NEXT_PUBLIC_WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL
);

/** @type {import('next').NextConfig} */
export const images = {
    remotePatterns: [
        {
            protocol: protocol.slice(0, -1),
            hostname,
            port,
            pathname: `${pathname}/**`,
        },
        {
            protocol: "http",
            hostname: "0.gravatar.com",
        },
        {
            protocol: "http",
            hostname: "localhost",
        },
    ],
};
