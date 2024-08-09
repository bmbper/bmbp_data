use salvo::{handler, Request, Response, Scribe};
use salvo::prelude::Text;
use crate::ctx::ctx_init;
use crate::init::DATA_TERA;

#[handler]
pub async fn meta_group_view(_: &mut Request, res: &mut Response) {
    let mut ctx = ctx_init();
    res.render(Text::Html((*DATA_TERA).render("meta_group.html", &ctx).unwrap()));
}
#[handler]
pub async fn meta_view(_: &mut Request, resp: &mut Response) {
    let mut ctx = ctx_init();
    resp.render(Text::Html((*DATA_TERA).render("meta.html", &ctx).unwrap()));
}
