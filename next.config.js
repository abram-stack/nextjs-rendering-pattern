/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com',
      'jherr-pokemon.s3.us-west-1.amazonaws.com'
    ]
  }
}

module.exports = nextConfig

// module.exports = {
// images: {
//    domains: ["jherr-pokemon.s3.us-west-1.amazonaws.com"]
//   }
// };
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'jherr-pokemon.s3.us-west-1.amazonaws.com',
//         port: '',
//         pathname: '',
//       },
//     ],
//   },
// }