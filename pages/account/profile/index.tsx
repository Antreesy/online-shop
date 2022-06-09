import { NextPage } from "next"
import Head from "next/head"

import { BrandProfile } from "../../../Сomponents/BrandProfile/BrandProfile"
import { accountProps } from "shared/constants/brandProfile"
import { Roles } from "shared/enums/roles"

const Profile: NextPage = () => {
  // useEffect(() => {
  //   dispatch get options for role

  //   dispatch push this options to store

  // }, []);

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      {Roles.BRAND === 0 ? <BrandProfile {...accountProps} /> : null}
    </>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async ({ req, res, ...etc }) => {

//     const role = getRoleFromServer
//     return { props: { role } };
//   },
// );

// export default connect((state) => state)(Profile);

export default Profile
