// a quick shim for downloading files

class FileDownloadStream {
    url: string;
    xhr: XMLHttpRequest;
    buffer: Int8Array;
    pos: number;
    
    constructor(file: string) {
        this.url = file;

        this.xhr = new XMLHttpRequest();
        this.xhr.responseType = 'arraybuffer';
        this.xhr.open('GET', file, true);

        this.buffer = null;
        this.pos = 0;
    }

    _loadResBytes() {
        return new Promise<Int8Array>((resolve, reject) => {
            this.xhr.onerror = e => reject(e);

            this.xhr.onload = () => {
                if (!/^2/.test(String(this.xhr.status))) {
                    reject(new Error(`unable to download ${this.url}.
                        status code = ${this.xhr.status}`));
                } else {
                    resolve(new Int8Array(this.xhr.response));
                }
            };

            this.xhr.send();
        });
    }

    async readFully(dest: Int8Array, off = 0, len) {
        if (typeof len === 'undefined') {
            len = dest.length;
        }

        if (!this.buffer) {
            this.buffer = await this._loadResBytes();
        }

        dest.set(this.buffer.slice(this.pos, this.pos + len), off);
        this.pos += len;
    }
}

export default FileDownloadStream;
