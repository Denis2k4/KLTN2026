import { createContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // User state
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Booking state
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);

  // Room & Addon state
  const [rooms, setRooms] = useState([]);
  const [roomClasses, setRoomClasses] = useState([]);
  const [roomPrices, setRoomPrices] = useState([]);
  const [addons, setAddons] = useState([]);

  // API Base URL
  const API_BASE_URL = "http://localhost:3000/api";

  // Hotels data
  const hotels = [
    {
      id: 1,
      name: "La Sinfonia",
      location: "Ho Chi Minh City",
      rating: 5,
      reviews: 324,
      image: "https://picsum.photos/500/400?random=1",
      description: "Luxury 5-star resort in the heart of Ho Chi Minh City",
      price: 200,
      amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Bar"],
    },
    {
      id: 2,
      name: "Mekong Palace",
      location: "Can Tho",
      rating: 4.8,
      reviews: 287,
      image: "https://picsum.photos/500/400?random=2",
      description: "Riverside luxury hotel with traditional charm",
      price: 150,
      amenities: ["WiFi", "Spa", "Restaurant", "River View"],
    },
    {
      id: 3,
      name: "Hanoi Heights",
      location: "Hanoi",
      rating: 4.9,
      reviews: 412,
      image: "https://picsum.photos/500/400?random=3",
      description: "Modern luxury hotel with panoramic city views",
      price: 180,
      amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Fitness"],
    },
    {
      id: 4,
      name: "Beach Paradise",
      location: "Da Nang",
      rating: 4.7,
      reviews: 198,
      image: "https://picsum.photos/500/400?random=4",
      description: "Beachfront resort with water sports facilities",
      price: 140,
      amenities: ["WiFi", "Pool", "Beach", "Water Sports", "Restaurant"],
    },
  ];

  // Room types
  const roomTypes = [
    {
      id: 1,
      name: "Standard Room",
      description: "Comfortable room with essential amenities",
      price: 80,
      capacity: 2,
      image: "https://picsum.photos/400/300?random=5",
    },
    {
      id: 2,
      name: "Deluxe Room",
      description: "Spacious room with premium bedding",
      price: 120,
      capacity: 2,
      image: "https://picsum.photos/400/300?random=6",
    },
    {
      id: 3,
      name: "Suite",
      description: "Luxury suite with separate living area",
      price: 200,
      capacity: 4,
      image: "https://picsum.photos/400/300?random=7",
    },
    {
      id: 4,
      name: "Presidential Suite",
      description: "Ultimate luxury with premium amenities",
      price: 500,
      capacity: 6,
      image: "https://picsum.photos/400/300?random=8",
    },
  ];

  // User functions
  const loginUser = useCallback((userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    navigate("/");
  }, [navigate]);

  // Room API functions
  const fetchRooms = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/room`);
      const data = await response.json();
      if (data.success) {
        setRooms(data.metadata);
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  }, []);

  const fetchRoomClasses = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/room/classes/all`);
      const data = await response.json();
      if (data.success) {
        setRoomClasses(data.metadata);
      }
    } catch (error) {
      console.error("Error fetching room classes:", error);
    }
  }, []);

  const fetchRoomPrices = useCallback(async (startDate, endDate) => {
    try {
      const params = new URLSearchParams();
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);
      
      const response = await fetch(`${API_BASE_URL}/room/prices?${params}`);
      const data = await response.json();
      if (data.success) {
        setRoomPrices(data.metadata);
      }
    } catch (error) {
      console.error("Error fetching room prices:", error);
    }
  }, []);

  // Addon API functions
  const fetchAddons = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/addon`);
      const data = await response.json();
      if (data.success) {
        setAddons(data.metadata);
      }
    } catch (error) {
      console.error("Error fetching addons:", error);
    }
  }, []);

  // Booking API functions
  const fetchBookings = useCallback(async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/booking`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (data.success) {
        setBookings(data.metadata);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }, []);

  const createBookingAPI = useCallback(async (bookingData, token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/booking`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });
      const data = await response.json();
      if (data.success) {
        setCurrentBooking(data.metadata);
        return data.metadata;
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  }, []);

  // Payment API functions
  const createPaymentAPI = useCallback(async (paymentData, token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/payment`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  }, []);

  const logoutUser = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    setBookings([]);
    setCurrentBooking(null);
    navigate("/");
  }, [navigate]);

  const updateUserProfile = useCallback((updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
  }, []);

  // Booking functions
  const createBooking = useCallback((bookingData) => {
    const newBooking = {
      id: bookings.length + 1,
      ...bookingData,
      createdAt: new Date(),
      status: "confirmed",
    };
    setBookings((prev) => [...prev, newBooking]);
    setCurrentBooking(newBooking);
    return newBooking;
  }, [bookings.length]);

  const updateBooking = useCallback((bookingId, updatedData) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === bookingId ? { ...booking, ...updatedData } : booking
      )
    );
    if (currentBooking?.id === bookingId) {
      setCurrentBooking((prev) => ({ ...prev, ...updatedData }));
    }
  }, [currentBooking?.id]);

  const cancelBooking = useCallback((bookingId) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === bookingId ? { ...booking, status: "cancelled" } : booking
      )
    );
  }, []);

  // Data retrieval functions
  const getHotelById = useCallback((hotelId) => {
    return hotels.find((h) => h.id === hotelId);
  }, []);

  const getRoomTypeById = useCallback((roomId) => {
    return roomTypes.find((r) => r.id === roomId);
  }, []);

  const getUserBookings = useCallback(() => {
    return bookings.filter((b) => b.status !== "cancelled");
  }, [bookings]);

  const value = {
    // User
    user,
    isAuthenticated,
    loginUser,
    logoutUser,
    updateUserProfile,

    // Bookings
    bookings,
    currentBooking,
    createBooking,
    updateBooking,
    cancelBooking,
    getUserBookings,
    fetchBookings,
    createBookingAPI,

    // Room & Addon
    rooms,
    roomClasses,
    roomPrices,
    addons,
    fetchRooms,
    fetchRoomClasses,
    fetchRoomPrices,
    fetchAddons,

    // Payment
    createPaymentAPI,

    // Data
    hotels,
    roomTypes,
    getHotelById,
    getRoomTypeById,

    // Navigation
    navigate,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;