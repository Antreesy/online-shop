import { Grid } from "@mui/material"
import { SectionHeader, ProductItemList } from "Сomponents"
import { Card, Pagination } from "UI"

import { productItems } from "shared/constants/productItems"

import s from "styles/pages/favorites.module.scss"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UniversalFavoritesProps {}

const UniversalFavorites: React.FC = () => {
  return (
    <>
      <section className={s.main}>
        <div className={s.container}>
          <div className={s.content}>
            <SectionHeader className={s.sectionHeader} title="Favorites" />
            <div className={s.products}>
              <ProductItemList productItemList={productItems} />
            </div>

            <Pagination className={s.pagination} pagesCount={4} isShort />
            <SectionHeader
              className={s.sectionHeader}
              title="Followed Collections"
            />

            <div className={s.collections}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 4, md: 8, xl: 12 }}
                className={s.card_grid}
              >
                {Array.from(Array(6)).map((item) => (
                  <Grid
                    item
                    key={item}
                    xs={2}
                    sm={4}
                    md={4}
                    justifyContent="space-evenly"
                  >
                    <Card
                      className={s.card}
                      imageSrc="/../public/assets/img/picture_1.png"
                      title="Gizem Sancak"
                      buttonTitle="Go To Store"
                      topButtonTitle="Follow"
                    />
                  </Grid>
                ))}
              </Grid>
            </div>

            <Pagination className={s.pagination} pagesCount={4} isShort />
          </div>
        </div>
      </section>
    </>
  )
}

export default UniversalFavorites
