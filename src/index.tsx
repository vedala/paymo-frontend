import React from 'react';
import ReactDOM from 'react-dom/client';
import Auth0ProviderWithNavigate from './components/Auth0ProviderWithNavigate';
import App from './App';
import {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_REDIRECT_URI,
  AUTH0_AUDIENCE
} from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0ProviderWithNavigate
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: AUTH0_REDIRECT_URI,
        audience: AUTH0_AUDIENCE
      }}
    >
      <App />
    </Auth0ProviderWithNavigate>
  </React.StrictMode>
);
