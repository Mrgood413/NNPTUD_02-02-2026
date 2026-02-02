module.exports = {
    ConvertTitleToSlug: function (title) {
        let result = title.toLowerCase();
        result = result.replace(/[^a-z0-9\s-]/g, '');
        result = result.replace(/\s+/g, '-');
        result = result.replace(/-+/g, '-');
        result = result.replace(/^-|-$/g, '');
        return result;
    }
}
