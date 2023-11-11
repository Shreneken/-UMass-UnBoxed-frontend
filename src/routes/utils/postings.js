export class Post {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getImage() {
        return this.image;
    }

    static create() {
        return new Post("Loading...");
    }

    static fromJson(postData) {
        return new Post(postData.name, postData.price, postData.image);
    }
}

export class Postings {
    constructor() {
        this.listPosts = [];
    }

    getListPosts() {
        return this.listPosts;
    }

    static create() {
        return new Postings();
    }

    static fromJson(allPostsData) {
        return new Post(
            Object.entries(allPostsData).map((postData) =>
                Post.fromJson(postData)
            )
        );
    }
}
