use bmbp_lib_ui::build_bmbp_ui_lib_router;
use salvo::prelude::*;
use bmbp_data::build_bmbp_data_router;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt().init();
    let host = "0.0.0.0:9999";
    tracing::info!("启动初始化服务,监听地址:{}......", host);
    let acceptor = TcpListener::new(host).bind().await;
    let mut router = Router::new();
    router = router.push(build_bmbp_ui_lib_router());
    router = router.push(build_bmbp_data_router());
    Server::new(acceptor).serve(router).await;
}
