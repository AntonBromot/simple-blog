export const GET = {
    method: 'GET',
    mode: 'cors',
};

export const POST = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
};

export const PUT = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
};

export const EDITOR_INIT = {
    plugins: 'link image code',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | fontsizeselect',
    fontsize_formats: '8px 10px 12px 14px 18px 24px'
}

export const MONTH_NAME = { "January": [], "February": [], "March": [], "April": [],
                            "May": [], "June": [], "July": [], "August": [],
                            "September": [], "October": [], "November": [], "December": [],
}

export const NAV_LINKS = [
    { value: 'blog', link: '/1' },
    { value: 'about us', link: '/aboutUs' },
    { value: 'services', link: '/services' },
    { value: 'guarantee', link: '/guarantee' },
    { value: 'resources', link: '/resources' },
    { value: 'forms', link: '/forms' },
    { value: 'contact', link: '/contact' }
]

