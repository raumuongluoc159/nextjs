import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <NextLink href="https://www.facebook.com/1h3104N.D0">
            <Link href='https://www.facebook.com/1h3104N.D0'>https://www.facebook.com/1h3104N.D0</Link>
        </NextLink>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Do The Toan - Leader Group 1
          </Heading>
          <p >
          $PROJECT_ROOT 
          <br></br>│   #Các thành phần của trang<br></br>
  ├── pages{' '}<br></br>
  │   #Tệp thành phần thư viện React {' '}<br></br>
  ├── components{' '}<br></br>
  │   # Các thành phần không bao gồm trong React{' '}<br></br>
  ├── lib{' '}<br></br>
  │   # File Hình ảnh, model 3D {' '}<br></br>
  └── public{' '}<br></br>
          </p>
          <p>This demo was copy from @devaslife</p>
          <p>Copyright by @devaslife with MIT License </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Dự án demo này được chỉnh sửa từ Craftdog Project của @devaslife {' '}
          <NextLink href="https://www.youtube.com/devaslife" passHref>
            <Link target="_blank">Dev as Life</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink target="_blank" href="https://www.facebook.com/1h3104N.D0" passHref scroll={false}>
            <Button  rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Facebook Profile
            </Button>
          </NextLink>
        </Box>
      </Section>

      

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Các thành viên trong nhóm : 
        </Heading>
        <Paragraph>
          Đỗ Thế Toàn {' '}
        </Paragraph>
        <Paragraph>
          Hoàng Văn Hiếu {' '}
        </Paragraph>
        <Paragraph>
          Nguyễn Hoàng Anh {' '}
        </Paragraph>
        <Paragraph>
          Nguyễn Hà {' '}
        </Paragraph>
      </Section>

    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
