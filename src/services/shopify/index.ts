import { env } from "app/config/env"
import { shopifyUrls } from "./routes"

export const getProducts = async () => {
    try {
        const response = await fetch(shopifyUrls.products.all, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            })
        })
        const { products } = await response.json()
        return products
    } catch (error) {
        console.log(error)
    }
}