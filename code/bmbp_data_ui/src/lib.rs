use salvo::prelude::*;
use crate::init::build_bmbp_data_static_router;
use crate::view::{meta_group_view, meta_view};

mod init;
mod action;
mod view;
mod ctx;

pub fn build_bmbp_data_router() -> Router {
    let mut router = Router::new();
    router = router.push(build_bmbp_data_static_router());

    router = router.push(Router::with_path("bmbp/data/meta/meta.view").get(meta_view)).
        push(Router::with_path("bmbp/data/meta/meta_group.view").get(meta_group_view));
    return router;
}