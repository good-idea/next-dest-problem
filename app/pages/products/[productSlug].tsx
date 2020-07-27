import * as React from 'react'

const Product = ({ productSlug }) => {
  return (
    <div>
      <h1>Product</h1>
      <h3>{productSlug}</h3>
    </div>
  )
}

/**
 * Initial Props
 */

export const getStaticProps = async (ctx) => {
  const { params } = ctx
  return { props: { productSlug: params.productSlug }, revalidate: 60 }
}

/**
 * Static Paths
 */

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default Product
