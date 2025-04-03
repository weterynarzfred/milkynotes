import Widget from "remotestorage-widget";
import RemoteStorage from 'remotestoragejs';

const remoteStorage = new RemoteStorage();
const widget = new Widget(remoteStorage);
widget.attach();

remoteStorage.access.claim('milkynotes', 'rw');
remoteStorage.caching.enable('/milkynotes/');

const remoteStorageClient = remoteStorage.scope('/milkynotes/');

export default remoteStorage;
export {
  remoteStorageClient
};
