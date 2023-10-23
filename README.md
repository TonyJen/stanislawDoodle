# stanislawDoodle
Google Stanislaw Doodle Project

This project is a React-based application that provides an interactive game experience. It leverages the performance and maintainability benefits offered by modern JavaScript frameworks like React.

## Component Hierarchy
The application is broken down into reusable React components. The main components include `EngineActor`, `EngineAction`, `EngineTransition`, and `EngineConst`. These components handle the game's actors, actions, transitions, and various constants used in the game engine respectively.

## State Management
The application's global state is managed using Redux. The state includes actors, actions, and transitions which are handled by their respective reducers.

## Routing
Different scenes or views in the application are handled using React Router. The main routes include the Score and Level components.

## Testing
The application uses Jest and React Testing Library to ensure all components and application logic work as expected. Tests are located in the `src/tests` directory.

## Optimization
The application implements React-specific performance optimizations, such as lazy loading and suspense for asynchronous operations, and memo for preventing unnecessary renders.

## Asset Management
Assets are organized and managed within components. They are imported and exported in the `src/assets` directory.

## Backward Compatibility
The new React application is fully compatible with the existing functionalities and user experience of the StanislawDoodle application.

Apache license
http://www.apache.org/licenses/LICENSE-2.0
