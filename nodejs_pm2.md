#PM2
node进程管理工具, 用于性能监控，自动监控，负载均衡等;

参数:
--watch
// 监听目录的变化;
-i --instance
// 启用实例的数量;

pm2 restart app.js
// 重启;
pm2 start app.js --watch -i 2
// 启动;
pm2 stop app_name|app.js
// 停止;
pm2 stopall
// 全部停止;
pm2 list
// 查看进程状态;

