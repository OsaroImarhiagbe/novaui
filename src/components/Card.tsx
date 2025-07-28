import {
  ContentCard,
  ContentCardBody,
  ContentCardImage,
  ContentCardTitle,
  Typography,
  Utility,
} from '@visa/nova-react';
import { CardType } from '@/utils/types/types';

const ImageHeaderContentCard:React.FC<CardType> = ({headline,description,img}) => {
  return (

<ContentCard
    style={{
        inlineSize: '100%',
        maxInlineSize: '640px',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <ContentCardImage
        // If your image is NOT decorative, be sure to write alt text describing the image
        alt="image"
        // Make sure the src path is correct for your image
        src={img}
        style={{
            blockSize:'200px',
            inlineSize:'100%',
            objectFit: 'cover'}}
        tag="img"
      />
      <Utility
         style={{
            padding:20
        }}
      element={<ContentCardBody />}
      vFlex vFlexCol vGap={12} vPadding={16}>
        <ContentCardTitle
        variant="headline-4"
        className='text-black'>{headline}</ContentCardTitle>
        <Typography className="v-pt-4">
          {description}
        </Typography>
      </Utility>
    </ContentCard>
  );
};

export default ImageHeaderContentCard;