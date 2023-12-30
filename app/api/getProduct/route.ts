import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const productSearch = await stripe.products.search({
    query: 'name~"' + request.nextUrl.searchParams.get("name") + '"',
  });
  const product = productSearch.data[0];
  const price = await stripe.prices.retrieve(product.default_price as string);
  return NextResponse.json(price);
}
