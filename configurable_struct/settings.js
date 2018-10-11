
var SETTINGS = {

    form: null, // RESERVED FOR THE APP

    /**
     * This setting will manage the method to add images in signature
     *  0: User can choose the method
     *  1: Images will show as URL linked to signature server via http
     *  2: Images will base64 encoded and added as source in the html (stand-alone mode)
     */
    standaloneMode: 0,

    /**
     * If images load fails, try to download again on "re-generate" process
     */
    redownloadImagesIfError: false,

    /**
     * This will be used to generate automatically the form, use current fields or example configurable fields to generate new ones
     * 
     * TIP: If you need custom results, edit "middleware.js"
     * FUTURE DESIRED IMPROVEMENT: If you need a custom form, you can edit "assets/js/templates/form.js", all elements that you add will be automatically read from app witouth need to add here.
     * 
     * This is a non-developer skills/fast development helper
     * 
     * EX: `Name: {{form.name}}, {{form.lastName}}`
     */
    fields: [
        {
            name: 'name', // Will be used as var name (key)
            displayText: 'Full Name',
            defaultValue: '',
            type: 'text', // "type" input / (text|checkbox)
            //isChecked: true, // (boolean) only for checkbox
        },
        {
            name: 'professionalCategory',
            displayText: 'Professional Category',
            defaultValue: 'Full Stack Senior',
            type: 'text',
        },
        {
            name: 'phone',
            displayText: 'Phone',
            defaultValue: '+34 ',
            type: 'text',
        },
        {
            name: 'email',
            displayText: 'Email',
            defaultValue: '@mycompany.com',
            type: 'text',
        }
    ],

    
    /**
     * This are additional fields that you can use in the template
     * You can use custom mustache.js syntax (arrays, functions...)
     * You are free to add/remove all fields, but remember to change it in "template.js"
     * EX: `{{#imageURL}}PATH_TO_YOUR_IMAGE_FILE{{/imageURL}}`
     * EX: `Company Name: {{companyInfo.name}}`
     * 
     * IMPORTANT: This will be merged with all form elements into "form" property.
     * You can use "console.log(this)" to see what are you receiving
     * 
     * https://github.com/janl/mustache.js/
     */
    companyInfo: {
        name: 'CompanyName',
        websiteText: 'racs.es', // Text to show on website URL
        website: 'https://racs.es', // URL to link
        direction: {
            street: 'Street Example',
            city: 'Example City',
            province: 'Barcelona',
            postalCode: '000000'
        }
    },
    socialNetworks: {
        github: 'http://github.com/ProtocolNebula',
        facebook: 'https://www.facebook.com/YOURFBPAGE',
        twitter: 'https://wwww.twitter.com/YOURCOMPANYTWITTER',
        instagram: 'https://www.instagram.com/YOURINSTAGRAMPAGE/',
        linkedin: 'https://www.linkedin.com/YOURLINKEDINURL/',
    },
    sizes: {
        socialNetworksIcons: '25px',
    },

    urlPhone: function() {
        return replaceAll(this.form.phone, ' ', '');
    },

    imageURL: null, // Will setted automatically depending if standalone or no

    /**
     * Normal mode image
     */
    imageURLNormal: function() {
        return function(url, render) {
            return render(url);
        }
    },
    
    /**
     * Standalone mode
     * This will try to load the image from "RemoteFilesManager" (CACHED_FILES), if not loaded yet,
     * will download and after that will call to App.checkFilesReady to refresh signature
     */
    imageURLStandalone: function(url) {
        return function(url, render) {
            var file = REMOTE_FILES_MANAGER.getFile(url, APP.checkFilesReady, 2, APP.checkFilesReady);
            if (file) {
                return render(file);
            }
        }
    }
    
};