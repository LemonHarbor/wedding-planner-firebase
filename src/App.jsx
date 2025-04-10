import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './utils/context/AuthContext';
import { ThemeProvider } from './utils/context/ThemeContext';
import { LanguageProvider } from './utils/context/LanguageContext';
import { WeddingProvider } from './utils/context/WeddingContext';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import GuestAuth from './pages/auth/GuestAuth';

// Common Pages
import Landing from './pages/common/Landing';
import NotFound from './pages/common/NotFound';
import PrivacyPolicy from './pages/common/PrivacyPolicy';
import TermsOfService from './pages/common/TermsOfService';

// Admin Pages (lazy loaded)
const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const AdminSettings = React.lazy(() => import('./pages/admin/Settings'));
const ContentEditor = React.lazy(() => import('./pages/admin/ContentEditor'));
const GuestManagement = React.lazy(() => import('./pages/admin/GuestManagement'));
const BudgetPlanner = React.lazy(() => import('./pages/admin/BudgetPlanner'));
const Timeline = React.lazy(() => import('./pages/admin/Timeline'));
const VendorManagement = React.lazy(() => import('./pages/admin/VendorManagement'));
const SeatingPlanner = React.lazy(() => import('./pages/admin/SeatingPlanner'));
const Announcements = React.lazy(() => import('./pages/admin/Announcements'));
const Polls = React.lazy(() => import('./pages/admin/Polls'));
const PhotoGallery = React.lazy(() => import('./pages/admin/PhotoGallery'));
const ThankYouTracker = React.lazy(() => import('./pages/admin/ThankYouTracker'));

// Guest Pages (lazy loaded)
const GuestHome = React.lazy(() => import('./pages/guest/Home'));
const GuestRSVP = React.lazy(() => import('./pages/guest/RSVP'));
const GuestInfo = React.lazy(() => import('./pages/guest/Info'));
const GuestSchedule = React.lazy(() => import('./pages/guest/Schedule'));
const GuestLocation = React.lazy(() => import('./pages/guest/Location'));
const GuestAccommodation = React.lazy(() => import('./pages/guest/Accommodation'));
const GuestMusic = React.lazy(() => import('./pages/guest/Music'));
const GuestPhotos = React.lazy(() => import('./pages/guest/Photos'));
const GuestGifts = React.lazy(() => import('./pages/guest/Gifts'));
const GuestTravel = React.lazy(() => import('./pages/guest/Travel'));

// Witness Pages (lazy loaded)
const WitnessDashboard = React.lazy(() => import('./pages/witness/Dashboard'));
const JGAPlanning = React.lazy(() => import('./pages/witness/JGAPlanning'));
const Discussion = React.lazy(() => import('./pages/witness/Discussion'));
const Expenses = React.lazy(() => import('./pages/witness/Expenses'));
const WitnessPhotos = React.lazy(() => import('./pages/witness/Photos'));

// Layout Components
import AdminLayout from './components/layout/AdminLayout';
import GuestLayout from './components/layout/GuestLayout';
import WitnessLayout from './components/layout/WitnessLayout';
import AuthLayout from './components/layout/AuthLayout';
import LoadingScreen from './components/ui/LoadingScreen';

// Protected Route Component
const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <LoadingScreen />;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <WeddingProvider>
              <React.Suspense fallback={<LoadingScreen />}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Landing />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  
                  {/* Auth Routes */}
                  <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/guest-auth" element={<GuestAuth />} />
                  </Route>
                  
                  {/* Admin Routes */}
                  <Route 
                    path="/admin" 
                    element={
                      <ProtectedRoute role="admin">
                        <AdminLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<AdminDashboard />} />
                    <Route path="settings" element={<AdminSettings />} />
                    <Route path="content" element={<ContentEditor />} />
                    <Route path="guests" element={<GuestManagement />} />
                    <Route path="budget" element={<BudgetPlanner />} />
                    <Route path="timeline" element={<Timeline />} />
                    <Route path="vendors" element={<VendorManagement />} />
                    <Route path="seating" element={<SeatingPlanner />} />
                    <Route path="announcements" element={<Announcements />} />
                    <Route path="polls" element={<Polls />} />
                    <Route path="photos" element={<PhotoGallery />} />
                    <Route path="thank-you" element={<ThankYouTracker />} />
                  </Route>
                  
                  {/* Guest Routes */}
                  <Route 
                    path="/guest" 
                    element={
                      <ProtectedRoute role="guest">
                        <GuestLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<GuestHome />} />
                    <Route path="rsvp" element={<GuestRSVP />} />
                    <Route path="info" element={<GuestInfo />} />
                    <Route path="schedule" element={<GuestSchedule />} />
                    <Route path="location" element={<GuestLocation />} />
                    <Route path="accommodation" element={<GuestAccommodation />} />
                    <Route path="music" element={<GuestMusic />} />
                    <Route path="photos" element={<GuestPhotos />} />
                    <Route path="gifts" element={<GuestGifts />} />
                    <Route path="travel" element={<GuestTravel />} />
                  </Route>
                  
                  {/* Witness Routes */}
                  <Route 
                    path="/witness" 
                    element={
                      <ProtectedRoute role="witness">
                        <WitnessLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<WitnessDashboard />} />
                    <Route path="jga" element={<JGAPlanning />} />
                    <Route path="discussion" element={<Discussion />} />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="photos" element={<WitnessPhotos />} />
                  </Route>
                  
                  {/* 404 Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </React.Suspense>
            </WeddingProvider>
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
