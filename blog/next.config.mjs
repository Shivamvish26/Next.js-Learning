/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['images.unsplash.com']
    },
    redirects: async()=>{
        return[
            {
                source:'/redirect',
                destination:"/",
                permanent:false
            }
        ]
    }
};

export default nextConfig;
