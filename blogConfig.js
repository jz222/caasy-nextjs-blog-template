/**
 * This files contains all the meta data of your blog. Feel
 * free to change it according to your needs. Please
 * keep in mind, that the actual blog posts are fetched
 * from the Caasy API. This file only contains static
 * information that does not change such as the name
 * of the blog.
 */
export default {
    caasySDKConfig: {
        siteId: '5f7cc20dc302c4fa0a961f8f'
    },
    blogName: 'myBlog',
    defaultTitle: 'my personal tech blog',
    description: 'This blog showcases how to use Caasy and its official JS SDK. Please visit our website for more information. Caasy is developed and maintained by Mosaic.',
    // The default language is used to improve accessibility.
    // It is set on the HTML element. You can change this
    // to the main language of your content.
    defaultLanguage: 'en',
    // The locale is used for multi language content. This
    // feature hasn't been released yet. Please don't change
    // this until Caasy fully supports multi language content.
    locale: 'en_US',
    social: {
        github: 'https://github.com/jz222',
        dev: 'https://dev.to/jz222',
        twitter: 'https://twitter.com',
        linkedin: 'https://www.linkedin.com/in/timo-zimmermann',
        youtube: 'https://youtube.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com'
    },
    footer: {
        links: [
            {
                title: 'Website',
                items: [
                    { label: 'Caasy', url: 'https://caasy.io' }
                ]
            },
            {
                title: 'Developer',
                items: [
                    { label: 'Docs', url: 'https://docs.caasy.io' },
                    { label: 'Github', url: 'https://logowl.io' },
                    { label: 'JS SDK', url: 'https://mosaic.mc' }
                ]
            },
            {
                title: 'About',
                items: [
                    { label: 'Mosaic', url: 'https://mosaic.mc' },
                    { label: 'Log Owl', url: 'https://logowl.io' }
                ]
            }
        ]
    }
}