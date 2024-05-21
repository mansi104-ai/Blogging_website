/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : true,
    experimental:{
        appDir : true,
    },
    images: {
        domains : ["links.papareact.com"],
    }

};

// module.exports = {
//     logging: {
//       fetches: {
//         fullUrl: true,
//       },
//     },
//   }

export default nextConfig;
