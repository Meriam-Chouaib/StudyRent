import { StyledLinkFooter, ImgMedia } from './Link.styles';
export interface LinkIconProps {
  link: string;
  img: string;
}
export const LinkIcon = ({ link, img }: LinkIconProps) => {
  return (
    <>
      <StyledLinkFooter to={link}>
        <ImgMedia src={img} />
      </StyledLinkFooter>
    </>
  );
};
