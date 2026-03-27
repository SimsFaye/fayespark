export function slugify(input?: string) {
    if (!input) return '';

    var slug = input.toLowerCase().trim();

    // remove accents from characters
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // keep alphanumeric, CJK characters, spaces and hyphens
    slug = slug.replace(/[^a-z0-9\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\s-]/g, ' ').trim();

    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
}
