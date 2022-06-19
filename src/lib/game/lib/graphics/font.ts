class Font {
    name: any;
    type: any;
    size: any;
    static BOLD: number;

    constructor(name: string, type: number, size: number) {
        this.name = name;
        this.type = type;
        this.size = size;
    }

    toCanvasFont() {
        return `${this.getType()} ${this.size}px ${this.name}`;
    }

    getType() {
        if (this.type === 1) {
            return 'bold';
        } else if (this.type === 2) {
            return 'italic';
        }

        return 'normal';
    }
}

Font.BOLD = 1;

export default Font;

