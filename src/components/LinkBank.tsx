import { useState, useEffect, useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";
import { useAuth0 } from '@auth0/auth0-react';

const LinkBank = ({ onAddBank }: any) => {
  const PAYMO_API_URL = process.env.REACT_APP_PAYMO_API_URL;
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth0();
  const onSuccess = useCallback(async (publicToken: string) => {
    setLoading(true);
console.log("LinkBank: user=", user);
    await fetch(`${PAYMO_API_URL}/api/exchange_public_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ public_token: publicToken, user_id: user?.sub, user_name: user?.name, user_email: user?.email}),
    });
    setLoading(false);
    onAddBank();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createLinkToken = useCallback(async () => {
    if (window.location.href.includes("?oauth_state_id=")) {
      const linkToken = localStorage.getItem("link_token");
      setToken(linkToken);
    } else {
      const response = await fetch(`${PAYMO_API_URL}/api/create_link_token`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",          
        }
      });
      const data = await response.json();
      setToken(data.link_token);
      localStorage.setItem("link_token", data.link_token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setToken]);

  let isOauth = false;

  const config: any = {
    token,
    onSuccess,
  };

  if (window.location.href.includes("?oauth_state_id")) {
    config.receivedRedirectUri = window.location.href;
    isOauth = true;
  }

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    if (token === null) {
      createLinkToken();
    }
    if (isOauth && ready) {
      open();
    }
  // }, [token, isOauth, ready, open]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {!loading &&
        <button
          onClick={() => open()}
          disabled={!ready}
        >
          Link bank
        </button>
      }
      {loading &&
        <span>Loading...</span>
      }
    </div>
  );
};

export default LinkBank;
