import express from 'express';
import cors from 'cors';
import config from 'config';
import { createServer } from 'http';
import { connectDB } from './config/dbConnect.js';

import newsCarRoutes from './Routes/newsCarRoutes.js';
import newsInterestingRoutes from './Routes/newsInterestingRoutes.js';
import newsExclusiveRoutes from './Routes/newsExclusiveRoutes.js';
import newsAdviceRoutes from './Routes/newsAdviceRoutes.js';
import newsAuthRoutes from './Routes/AuthRoutes.js';
import auctionRoutes from './Routes/AuctionRoutes.js';
import bidRoutes from './Routes/BidRoutes.js';
import dealRoutes from './Routes/DealRoutes.js';

import { setupBiddingSocket } from './Sockets/bid.socket.js';

import { finalizeAuctions } from './services/auctionScheduler.js';

const app = express();
const server = createServer(app);
const PORT = config.get('serverPort');

const timeFinalizeAuctions = 5 * 60 * 1000;

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use('/api/auth', newsAuthRoutes);
app.use('/api/new-cars', newsCarRoutes);
app.use('/api/news-interesting', newsInterestingRoutes);
app.use('/api/news-exclusive', newsExclusiveRoutes);
app.use('/api/news-advice', newsAdviceRoutes);
app.use('/api/auction', auctionRoutes);
app.use('/api/bid', bidRoutes);
app.use('/api/deal', dealRoutes);

setupBiddingSocket(server);
setInterval(finalizeAuctions, timeFinalizeAuctions);
const startServer = async () => {
    await connectDB();

    server.listen(PORT, () => {
        console.log(`🚀 Server listening on port ${PORT}`);
    });
};

startServer();
