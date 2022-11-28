import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import avt1 from '../public/images/contents/avt1.png'
import avt2 from '../public/images/contents/avt2.png'
import avt3 from '../public/images/contents/avt3.png'
import avt4 from '../public/images/contents/avt4.png'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Danh sách thành viên
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Đỗ Thế Toàn"
            thumbnail={avt1}
            href="#"
          />
          <GridItem
            title="Hoàng Văn Hiếu"
            thumbnail={avt4}
            href="#"
          />
          <GridItem
            title="Nguyễn Hoàng Anh"
            thumbnail={avt3}
            href="#"
          />
          <GridItem
            title="Nguyễn Hà"
            thumbnail={avt2}
            href="#"
          />
        </SimpleGrid>
      </Section>

     
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
