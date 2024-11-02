import { Skeleton } from "./ui/skeleton";
import { SkeletonText } from "./ui/skeleton";
import { Card } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="350px" borderRadius={10} overflow="hidden">
      <Skeleton height="350px">
        <Card.Body>
          <SkeletonText noOfLines={2}></SkeletonText>
        </Card.Body>
      </Skeleton>
    </Card.Root>
  );
};

export default GameCardSkeleton;
