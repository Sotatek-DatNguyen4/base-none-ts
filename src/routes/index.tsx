import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearAlert } from '../store/actions/alert';
import Error from '../pages/error/index';
import NotFound from '../pages/not-found/index';
import ErrorBoundary from '../components/common/error-boundary/index';
import Home from '../pages/home/index';
import Login from '../pages/login/index';
import Form from '../pages/form/index';

//@ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AppContainer from '../AppContainer';

const Routes: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const dispatch = useDispatch();

  const alert = useSelector((state: any) => state.alert);
  const { history } = props;

  useEffect(() => {
    const { type, message } = alert;
    if (type && message) {
      NotificationManager[type](message);
    }
  }, [alert]);

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(clearAlert());
    });
  }, []);


  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/error" component={Error} />
        <Route path="/login" component={Login} />
        <Route path="/form" component={Form} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
};

const RoutesHistory = withRouter(Routes);

const routing = function createRouting() {
  return (
    <>
      <NotificationContainer />
      <Router>
        <AppContainer>
          <ErrorBoundary>
            <RoutesHistory />
          </ErrorBoundary>
        </AppContainer>
      </Router>
    </>
  );
};

export default routing;
