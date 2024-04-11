import { useContract, useNFTs } from "@thirdweb-dev/react";
import { TOOLS_ADDRESS } from "../const/addresses";
import Link from "next/link";
import { Text, Button, Container, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import NFT from "../components/NFT";

export default function Shop()  {
    const { contract } = useContract(TOOLS_ADDRESS);
    const { data: nfts } = useNFTs(contract);
    console.log(nfts);

    return (
        <Container maxW={"1200px"}
        backgroundImage={`url('/images/Slider_principal.jpg')`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat">
            <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Link
                    href="/"
                >
                    <Button>Back</Button>
                </Link>
            </Flex>
            <Heading mt={"40px"} color="white" >Shop</Heading>
            <Text color="white">The more mining machines you have, the more $CrypD tokens you will generate.</Text>
            {!nfts ? (
                <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
                    <Spinner />
                </Flex>
            ) : (
                <SimpleGrid columns={3} spacing={10}>
                    {nfts?.map((nftItem) => (
                        <NFT 
                            key={nftItem.metadata.id}
                            nft={nftItem}
                        />
                    ))}
                </SimpleGrid>
            )}
        </Container>
    )
};