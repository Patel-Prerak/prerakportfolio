import { useEffect } from 'react';

const SEO = ({
    title = "Prerak Patel | Full Stack Developer & Software Engineer",
    description = "Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my portfolio of innovative projects and software solutions.",
    keywords = "Prerak Patel, Full Stack Developer, Software Engineer, React Developer, Node.js, Web Development, Portfolio, JavaScript, Python",
    ogImage = "/og-image.png",
    url = "https://prerak-portfolio-b3pla962l-patelprerak435-1434s-projects.vercel.app/"
}) => {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Update meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Primary meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Open Graph
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:url', url, true);

        // Twitter
        updateMetaTag('twitter:title', title, true);
        updateMetaTag('twitter:description', description, true);
        updateMetaTag('twitter:image', ogImage, true);

    }, [title, description, keywords, ogImage, url]);

    return null;
};

export default SEO;
