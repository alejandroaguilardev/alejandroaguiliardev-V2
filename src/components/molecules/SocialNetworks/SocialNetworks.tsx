import { Instagram, LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import { ListItem } from '@mui/material';
import { Networks } from "../../atoms";
import { dataNetworks } from './dataNetworks';
import { IISocialNetworks } from './ISocialNetworks';

export const SocialNetworks = ({ fab = false }: IISocialNetworks) => {

  return (
    <>
      {
        dataNetworks.map((data) => (
          <ListItem sx={fab ? { width: "1%" } : data.style} key={data.title}>
            <a
              href={data.href}
              target="_blank"
              rel="noreferrer noopener"

            >
              <Networks
                title={data.title}
                text={data.text}
                fab={fab}
              >
                <>
                  {data.title === "Twitter" && <Twitter sx={{ color: 'primary.contrastText', fontSize: '1.5rem' }} />}
                  {data.title === "Instagram" && <Instagram sx={{ color: 'primary.contrastText', fontSize: '1.5rem' }} />}
                  {data.title === "LinkedIn" && <LinkedIn sx={{ color: 'primary.contrastText', fontSize: '1.5rem' }} />}
                  {data.title === "GitHub" && <GitHub sx={{ color: 'primary.contrastText', fontSize: '1.5rem' }} />}
                </>
              </Networks>
            </a>
          </ListItem>

        ))
      }
    </>
  )
}
