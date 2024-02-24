import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {

    return {
        port: options.port,
        // historyApiFallback позволяет проксировать запросы через index.html (переходить на страницу по ссылке)
        historyApiFallback: true,
        // open открывает автоматически страницу в браузере
        open: true
    }
}
