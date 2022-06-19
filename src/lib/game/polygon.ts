class Polygon {
	minPlaneX: number;
	minPlaneY: number;
	maxPlaneX: number;
	maxPlaneY: number;
	minZ: number;
	maxZ: number;
	model: any;
	face: number;
	depth: number;
	normalX: number;
	normalY: number;
	normalZ: number;
	visibility: number;
	facefill: number;
	skipSomething: boolean;
	index: number;
	index2: number;

	constructor() {
		this.minPlaneX = 0;
		this.minPlaneY = 0;
		this.maxPlaneX = 0;
		this.maxPlaneY = 0;
		this.minZ = 0;
		this.maxZ = 0;
		this.model = null;
		this.face = 0;
		this.depth = 0;
		this.normalX = 0;
		this.normalY = 0;
		this.normalZ = 0;
		this.visibility = 0;
		this.facefill = 0;
		this.skipSomething = false;
		this.index = 0;
		this.index2 = 0;
	}
}

export default Polygon;
