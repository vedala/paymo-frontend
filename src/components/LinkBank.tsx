import { useState, useEffect, useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";

const LinkBank = () => {
  const PAYMO_API_URL = process.env.REACT_APP_PAYMO_API_URL;
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const onSuccess = useCallback(async (publicToken: string) => {
    setLoading(true);
    await fetch("/api/exchange_public_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ public_token: publicToken }),
    });
    setLoading(false);
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
console.log("token=", token);
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
      <button
        onClick={() => open()}
        disabled={!ready}
      >
        Link bank
      </button>

      {!loading &&
        <h2>Data displayed here</h2>
      }
    </div>
  );
};

export default LinkBank;
