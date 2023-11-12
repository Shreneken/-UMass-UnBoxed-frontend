export class Post {
    constructor(name, price, image, condition, sellerId) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.condition = condition;
        this.sellerId = sellerId;
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

    getSellerId() {
        return this.sellerId;
    }

    getCondition() {
        return this.condition;
    }

    static create() {
        return new Post("Loading...");
    }

    static fromJson(postData) {
        return new Post(
            postData.name,
            postData.price,
            postData.image,
            postData.condition,
            postData.sellerId
        );
    }
}

export class Postings {
    constructor(listPosts) {
        this.listPosts = listPosts;
    }

    getListPosts() {
        return this.listPosts;
    }

    static create() {
        return new Postings();
    }

    static fromJson(allPostsData) {
        return new Postings(
            allPostsData.map((postData) => Post.fromJson(postData))
        );
    }
}
