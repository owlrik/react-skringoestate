import Container from '@/shared/ui/Container';
import { SocialLinks } from '@/shared/ui/SocialLinks';

function InfoBar() {
  return (
    <div className="page-header__top">
      <Container>
        <div className="page-header__top-inner">
          <a className="page-header__link" href="tel:+971523248042">
            +971 52 324 8042
          </a>
          <a className="page-header__link" href="mailto:info@skringoestate.com">
            info@skringoestate.com
          </a>

          <SocialLinks />
        </div>
      </Container>
    </div>
  );
}

export default InfoBar;
