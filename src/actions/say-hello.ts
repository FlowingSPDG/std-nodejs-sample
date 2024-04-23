import { action, KeyDownEvent, SingletonAction } from "@elgato/streamdeck";

// UUIDは適宜読み替えてください
@action({ UUID: "com.shugo-flowingspdg-kawamura.std-nodejs-sample.say-hello" })
export class SayHelloAction extends SingletonAction {
    // KeyDownイベントが発火された際のコールバック
    async onKeyDown(ev: KeyDownEvent<any>) {
        // ボタンが押された際にタイトルを変更する
        await ev.action.setTitle("Hello world");
    }
}