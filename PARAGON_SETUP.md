# Paragon IDX Integration Setup Guide

This guide will help you set up Paragon IDX integration for your real estate website using IDX framing.

## Prerequisites

- Paragon Real Estate Software account
- MLS board membership
- Paragon IDX framing URL with your subscriber ID

## Step 1: Environment Configuration

1. **Update your `.env.local` file** with your Paragon IDX details:

```bash
# Paragon IDX Configuration
NEXT_PUBLIC_PARAGON_IDX_URL=http://bcres.paragonrels.com/idx
NEXT_PUBLIC_PARAGON_IDX_MLS_ID=BCRES
NEXT_PUBLIC_PARAGON_IDX_SUBSCRIBER_ID=545a2e4d-99ec-4e55-bdd5-0035dd322b1c
```

2. **Replace the placeholder values** with your actual IDX configuration from Paragon.

## Step 2: Paragon IDX Setup

### Contact Your MLS Board
1. Reach out to your MLS board (BC Real Estate Association)
2. Request Paragon IDX access
3. Get your IDX framing URL and subscriber ID

### IDX Configuration
1. Log into your Paragon account
2. Navigate to IDX settings
3. Configure your search parameters
4. Set up property display options
5. Configure MLS compliance settings

## Step 3: How IDX Framing Works

The IDX framing approach works as follows:

1. **Direct Integration:** The Paragon MLS search interface is embedded directly in your website
2. **No Authentication Required:** Users don't need to log in - they can search immediately
3. **Real-Time Data:** All searches and results come directly from the MLS system
4. **Seamless Experience:** The search interface looks and feels like part of your website

### Benefits of IDX Framing
- **No API Keys Required:** Uses your existing IDX subscription
- **Real-Time Data:** Access to live MLS data without authentication
- **Simplified Setup:** No need for complex API configuration
- **Professional Interface:** Uses Paragon's proven search interface
- **Automatic Updates:** Always uses the latest MLS features

## Step 4: Implementation

### Basic Usage
```tsx
import ParagonIDX from '../components/ParagonIDX';

// Basic search interface
<ParagonIDX searchType="basic" height="600px" />

// Advanced search interface
<ParagonIDX searchType="advanced" height="800px" />
```

### Customization Options
- `searchType`: 'basic' or 'advanced' search interface
- `height`: Customize the iframe height
- `showResults`: Control result display (for advanced mode)

## Step 5: User Experience

### Search Process
1. Users see the embedded MLS search interface
2. Enter search criteria (property type, price, location, etc.)
3. Results display directly in the embedded interface
4. Users can view property details, save searches, and more

### Features Available
- Property search by various criteria
- Map-based search (if supported by your IDX)
- Saved searches and favorites
- Property detail pages
- Contact forms for inquiries
- Photo galleries and virtual tours

## Step 6: Testing

1. **Test the IDX URL:**
   - Verify your IDX URL is accessible
   - Check that the search interface loads correctly
   - Test basic search functionality

2. **Test with real data:**
   - Search for properties in your area
   - Verify results display correctly
   - Check MLS compliance elements

3. **Test responsiveness:**
   - Ensure the iframe works on mobile devices
   - Test different screen sizes
   - Verify search forms are usable

## Step 7: Production Deployment

1. **Update environment variables** in your production environment
2. **Test thoroughly** before going live
3. **Monitor for any iframe loading issues**
4. **Ensure MLS compliance** is maintained

## Troubleshooting

### Common Issues

1. **"IDX Search Site is currently not available"**
   - Check your IDX subscription status
   - Verify the URL is correct
   - Contact Paragon support if needed

2. **Iframe not loading**
   - Check if the IDX site allows iframe embedding
   - Verify CORS settings
   - Check browser console for errors

3. **Search not working**
   - Verify your subscriber ID is correct
   - Check MLS board restrictions
   - Ensure IDX service is active

### Debug Steps

1. Check browser console for iframe errors
2. Verify IDX URL is accessible directly
3. Test IDX functionality on the Paragon site
4. Contact Paragon support if needed

## Support

- **Paragon Support:** Contact your Paragon representative
- **MLS Board:** Contact BC Real Estate Association for IDX access
- **Technical Issues:** Check the console logs and iframe loading

## Next Steps

Once basic integration is working:

1. **Customize the iframe styling** to match your brand
2. **Add property detail pages** with full MLS data
3. **Implement saved searches** and favorites
4. **Add lead capture forms** for property inquiries
5. **Set up email notifications** for new listings

## Security Notes

- IDX framing is secure and approved by MLS boards
- No sensitive data is stored on your server
- All MLS data comes directly from Paragon
- Users remain on your website throughout the process

## MLS Compliance

### Required Elements
- MLS logo and branding (usually included in IDX)
- Copyright notices
- Data accuracy disclaimers
- Contact information for your brokerage

### Best Practices
- Keep IDX interface prominently displayed
- Ensure mobile responsiveness
- Regular testing and monitoring
- Compliance with MLS rules and regulations

---

**Need Help?** Contact your Paragon representative or MLS board for assistance with IDX setup and configuration.
