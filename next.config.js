/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/dashboard',
//         destination: '/dashboard/unassigned',
//         permanent: true,
//       },
//     ]
//   },
// }