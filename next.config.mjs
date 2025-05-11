/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Only apply rewrites if messages URL is configured
    if (!process.env.NEXT_PUBLIC_MESSAGES_URL) {
      console.warn('NEXT_PUBLIC_MESSAGES_URL is not defined. Message rewrites will be skipped.');
      return [];
    }
    
    return [
      {
        source: '/messages',
        destination: `${process.env.NEXT_PUBLIC_MESSAGES_URL}/messages`,
      },
      {
        source: '/messages/:path*',
        destination: `${process.env.NEXT_PUBLIC_MESSAGES_URL}/messages/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/notes',
        permanent: false,
      },
      {
        source: '/:path((?!notes|api|messages|_next|static|public|favicon\\.ico|sitemap\\.xml|robots\\.txt).*)',
        destination: '/notes/:path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: '/messages',
//         destination: `${process.env.NEXT_PUBLIC_MESSAGES_URL}/messages`,
//       },
//       {
//         source: '/messages/:path*',
//         destination: `${process.env.NEXT_PUBLIC_MESSAGES_URL}/messages/:path*`,
//       },
//     ];
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/notes',
//         permanent: false,
//       },
//       {
//         source: '/:path((?!notes|api|messages|_next|static|public|favicon\\.ico|sitemap\\.xml|robots\\.txt).*)',
//         destination: '/notes/:path',
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;
