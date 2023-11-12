export class Post {
    constructor(
        postId,
        name,
        price,
        image,
        condition,
        sellerId,
        categories,
        residentialHall
    ) {
        this.postId = postId;
        this.name = name;
        this.price = price;
        this.image = image;
        this.condition = condition;
        this.sellerId = sellerId;
        this.categories = categories;
        this.residentialHall = residentialHall;
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

    getPostId() {
        return this.postId;
    }

    static create() {
        return new Post("Loading...");
    }

    static fromJson(postData) {
        return new Post(
            postData.id,
            postData.product_name,
            postData.price,
            "data:image/png;base64, " + postData.picture,
            postData.condition,
            postData.sellerId,
            postData.categories,
            postData.residential_hall
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
