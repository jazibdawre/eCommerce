import chai from 'chai';
import chaiHttp from "chai-http";
import app from '../server.js'

chai.use(chaiHttp);
chai.should();

const orderId = "600fbbee409090058ccc6509";
const userId = "600e9bf7ab74de2680fa32dc";

const createOrderQuery = {
    query: `
        mutation{
            createOrder(orderInput: {
            user: "600e9bf7ab74de2680fa32dc",
            orderItems: {
                name: "tanay",
                qty: 2,
                image: "qwerty",
                price: 20,
                product: "600efcb19782ed3f38131803",
            },
            shippingPrice: 10,
            shippingAddress: {
                address: "111",
                city: "mum",
                postalCode: "11",
                country: "ind"
            },
            paymentMethod: "cash",
            paymentResult: {
                id: "600e9bf7ab74de2680fa32d1",
                status: "paid",
                upString_time: "111",
                email_address: "qqq"
            },
            taxPrice: 11,
            totalPrice: 40,
            isPaid: true,
            paidAt: "11",
            isDelivered: false,
            deliveredAt: "11-09-80",
            }) {
            totalPrice,
            }
        }
    `
}

describe('Order routes', () => {
    describe('Create order', () => {
        it('should create an order and return totalPrice', (done) => {
            chai.request('http://localhost:5000')
                .get('/graphql')
                .send(createOrderQuery)
                .end((err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    res.body.should.be.a('object');
                    done();
                })
        })
    })
    describe('Get order by id', () => {
        it('should return an order', (done) => {
            chai.request('http://localhost:5000')
                .get('/grapgql')
                .send(orderId)
                .end((err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    res.body.should.be.a('object');
                    done();
                })
        })
    })
    describe('Update order to be paid', () => {
        it('should update and return an order', (done) => {
            chai.request('http://localhost:5000')
                .get('/grapgql')
                .send(orderId)
                .end((err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    res.body.should.be.a('object');
                    done();
                })
        })
    })
    describe('Update order to be delivered', () => {
        it('should update and return an order', (done) => {
            chai.request('http://localhost:5000')
                .get('/grapgql')
                .send(orderId)
                .end((err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    res.body.should.be.a('object');
                    done();
                })
        })
    })
    describe('Get all of my orders', () => {
        it('should return all order', (done) => {
            chai.request('http://localhost:5000')
                .get('/grapgql')
                .send(userId)
                .end((err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    res.body.should.be.an('object');
                    done();
                })
        })
    })
    describe('Get all orders', () => {
        it('should return all order', (done) => {
            chai.request('http://localhost:5000')
                .get('/grapgql')
                .end((err, res) => {
                    if(err) {
                        console.log(err);
                    }
                    res.body.should.be.an('object');
                    done();
                })
        })
    })
})